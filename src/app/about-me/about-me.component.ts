import { Component, OnInit } from '@angular/core';

declare var document: any;
declare var window: any;

@Component({
    selector: 'app-about-me',
    templateUrl: 'about-me.component.html',
    styleUrls: ['about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    hasLoadedLinkedIn: boolean = false;
    hasLoadedGitHub: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        this.handleLinkedInLoading();
        this.handleGitHubLoading();
    }

    handleLinkedInLoading(): void {
        // LinkedIn doesn't seem to play nice with Angular's routing, so always load the script when the component is initialized as a workaround.

        const loadedCallback2 = () => {
            try {
                document.querySelectorAll("div.LI-badge-container")[0].style.boxShadow = "none";
            } catch(_) {
                console.warn("Failed to get the LinkedIn container box... Skipping fix-ups.");
            }

            this.hasLoadedLinkedIn = true;
        };

        const loadedCallback = () => {
            setTimeout(loadedCallback2, 500);
        };

        const callback = () => {
            if (document) {
                let node = document.createElement('script');
                node.src = "https://platform.linkedin.com/badges/js/profile.js";
                node.type = "text/javascript";
                node.async = true;
                node.defer = true;
                node.onload = loadedCallback;
                document.getElementsByTagName('head')[0].appendChild(node);

                // Fallback just in case.
                setTimeout(loadedCallback, 3000);
            }
        };

        setTimeout(callback, 500);
    }

    handleGitHubLoading(): void {
        // GitHub Card's library doesn't allow customization, so we do our own directly.

        const callback = () => {
            if (document) {
                try {
                    document.getElementById("github").shadowRoot.querySelectorAll("div.footer-box")[0].style.boxShadow = "none";
                } catch(_) {
                    console.warn("Failed to get the GitHub footer box... Skipping fix-ups.");
                }

                this.hasLoadedGitHub = true;
            }
        };

        setTimeout(callback, 500);
    }

    isSocialMediaLoaded(): boolean {
        return this.hasLoadedLinkedIn && this.hasLoadedGitHub;
    }
}
