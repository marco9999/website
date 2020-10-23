import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { BlogItem, BlogItemRequest } from '../types/blog';
import { BlogNavItem } from '../types/blog-nav';

const BLOG_MARKDOWN_DEMO = `# Est saligno urbem illic genus cura et

## Fecere populisque virtutis beatam succurritis cthonius novissima

Lorem markdownum cultoribus senior haberet collo, soleant ait inventos patrem?
Vox [enim quercus](http://sub-naris.io/) Telamoniades maius. In rogantis merui.
Curvavit premis, natus Turnusque multa parantem volenti molle colubriferi.

- Quidem meque
- Medusae saepe fortibus convicia ore
- Fer iacentes ad amans filia spicea poscuntque
- Primis et nodis in per eunt venabula

Eburnea medius optime dat illi genetricis: exire mea; **carpere undarum
feliciter** in ventos Idomeneus exit Pyrois et siccata. Erat caede alumno
aliamve vela. Non auras, olim parte lapsi, non! Aut non ipsi Invidiae premens
vittam crederet tuos? **Suae nec** prolem, expalluit pondus, fugientis agantur
nymphae, viribus unaque ferre forte.

## Vatibus columbam passu

Os velat adspicis deusve;
[sanguine](http://videamusquondam.net/tollereorpheus.php) ut nati arcisque quas.
Custodia exclamo lucemque in Alba visa montes traxere ramumque. Noctis *verso*
non linquit, sed Rhodiae Iunonia modo perdidit formae. Profatur in repetit: cum
[o dolet ulla](http://inducta.net/haesissemexige.aspx), quod. Grave lapsu quis
nam est quibus raptae foedumque mediusve oculos rector, cur pectore.

**Color minata**, iura suis propior, ad Caeneus annos exemplo somnoque fallit.
Sed in matrem fecit sed esse adcommodat disci et feruntur sperare ipsa sint sic
silva tum se mihi! Non dixit haut [paenitet](http://www.babylonia.org/alma)
membris vulnera functa. Studioque illum, mei pridem formam, nat, dare caede?

1. Retorqueat quondam vates que fit metu nescio
2. Pisces tantum natae exspirare simul virgineo in
3. Minus illius
4. Festinat caede

Quid ego sanguine ipsa haec quippe loqui Solis: sed. Nives proxima risit
potiorque geminata vi ferus. Est noctis quarum iniecique ferox fidemque,
**arte** scilicet radiorum paratis Androgeique peteret relinqui, nec. Eduxit
non; Molossa turbarat aera quae mea translucet Mnemosynen boves?

Proserpina pro reditum videri fataliter? Guttura
[urbem](http://posset.com/si.aspx), mihi acervo est Astreus furiali et ait est
navita lecti recentibus tempora profeci est vati opibusque hoc.
`;

const BLOG_DEMO = [
    { id: 1, timestamp: DateTime.utc(2020, 10, 21, 1, 0, 0, 0), title: "Rayla, Callum & Ezryn and the Curious Case of the Dragon Egg"},
    { id: 2, timestamp: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), title: "Blog Post 2"},
    { id: 3, timestamp: DateTime.utc(2020, 8, 20, 1, 0, 0, 0), title: "Blog Post 3"},
    { id: 4, timestamp: DateTime.utc(2020, 7, 21, 1, 0, 0, 0), title: "Blog Post 4"},
    { id: 5, timestamp: DateTime.utc(2020, 7, 21, 1, 0, 0, 0), title: "Blog Post 5"},
];

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor() {
    }

    getBlog(request: BlogItemRequest): BlogItem {
        let requestId = (+request.id) || 1;
        console.warn(`Not implemented properly: ${requestId}`);
        return {
            ...BLOG_DEMO.find((i) => i.id === requestId),
            markdown: BLOG_MARKDOWN_DEMO
        };
    }

    getBlogHeaders(): BlogNavItem[] { 
        console.warn("Not implemented properly headers");
        return BLOG_DEMO;
    }
}
