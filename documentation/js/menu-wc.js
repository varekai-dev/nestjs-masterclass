'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-masterclass documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' :
                                            'id="xs-controllers-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' :
                                        'id="xs-injectables-links-module-AppModule-5992c64dfd7ad56ef2e2dee11fe66a1e7d321fe04a8eaca560c3ab7298be0c790e0d2262d7c7a862d9872adcd3025b8c692da29ca3c43224190075a4163f623a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' :
                                            'id="xs-controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' :
                                        'id="xs-injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' : 'data-bs-target="#xs-controllers-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' :
                                            'id="xs-controllers-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' : 'data-bs-target="#xs-injectables-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' :
                                        'id="xs-injectables-links-module-UserModule-8328ac4e73b6799387a035b15b80f99cd8c5e05d7515c4e87900eb76d464386dd74849d0e520529142d49287ef556a083bbe94786f51e1777a2f67da27d472e0"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});