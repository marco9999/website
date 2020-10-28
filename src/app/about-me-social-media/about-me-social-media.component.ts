import { Component, OnInit } from '@angular/core';

declare var document: Document;

@Component({
    selector: 'app-about-me-social-media',
    templateUrl: './about-me-social-media.component.html',
    styleUrls: ['./about-me-social-media.component.css']
})
export class AboutMeSocialMediaComponent implements OnInit {
    hasLoadedLinkedIn: boolean = false;
    hasLoadedGitHub: boolean = false;
    loadingOverride: boolean = false;

    perfTraceShowPending = true;
    perfTraceInstant: number | null = performance.now();

    constructor() {
    }

    ngOnInit(): void {
        this.handleGitHubLoading();
        this.handleLinkedInLoading();
        this.handleLinkedInScript();
        this.handleLoadingFallback();
    }
    
    handleGitHubLoading(): void {
        // GitHub Card's library doesn't allow customization, so we do our own directly.
        
        const observer = new MutationObserver((mutations, observer) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const elements = (node as Element).querySelectorAll("div.footer-box");
                        elements.forEach((element) => {
                            const htmlElement = element as HTMLElement;
                            htmlElement.style.boxShadow = "none";
                            this.hasLoadedGitHub = true;
                            console.log("Github fixup applied");
                            this.perfTracePostLoadingHook();
                            observer.disconnect();
                        });
                    }
                });
            });
        });
        
        const root = document.getElementById("github").shadowRoot.querySelectorAll("div.card")[0];
        observer.observe(root, { childList: true, subtree: true });
    }
    
    handleLinkedInLoading(): void {
        // LinkedIn profile card's library doesn't allow customization, so we do our own directly.

        const observer = new MutationObserver((mutations, observer) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const elements = (node as Element).querySelectorAll("div.LI-badge-container");
                        elements.forEach((element) => {
                            const htmlElement = element as HTMLElement;
                            htmlElement.style.boxShadow = "none";
                            this.hasLoadedLinkedIn = true;
                            console.log("LinkedIn fixup applied");
                            this.perfTracePostLoadingHook();
                            observer.disconnect();
                        });
                    }
                });
            });
        });
        
        const root = document.getElementById("linkedin");
        observer.observe(root, { childList: true, subtree: true });
    }
    
    handleLinkedInScript(): void {
        let node = document.createElement('script');
        node.src = "https://platform.linkedin.com/badges/js/profile.js";
        node.type = "text/javascript";
        node.async = true;
        node.defer = true;
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    handleLoadingFallback(): void {
        const callback = () => {
            const showMessage = !this.isSocialMediaLoaded();

            this.loadingOverride = true;

            if (showMessage) {
                console.log("Loading fallback required!");
                this.perfTracePostLoadingHook();
            }
        };

        setTimeout(callback, 3000);
    }

    perfTracePostLoadingHook(): void {
        if (this.isSocialMediaLoaded() && this.perfTraceShowPending) {
            const time = performance.now() - this.perfTraceInstant;
            console.log(`Loading took ${time}ms`);
            this.perfTraceShowPending = false;
        }
    }

    isSocialMediaLoaded(): boolean {
        return this.loadingOverride || (this.hasLoadedLinkedIn && this.hasLoadedGitHub);
    }
}
