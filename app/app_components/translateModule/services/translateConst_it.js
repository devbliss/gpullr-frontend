'use strict';
angular.module('translateModule')
    .constant('TranslateConstIt', {
        global: {
            btn: {
                save: 'Salva',
                cancel: 'Annulla',
                confirm: 'Conferma'
            }
        },
        meta: {
            title: 'gPullRequestTool',
            description: 'gPullRequestTool'
        },
        header: {
            logoAlt: 'gPullRequestTool 2015'
        },
        navi: {
            linkPullrequest: 'tutti pull requests',
            linkRanking: 'Classifica',
            linkSettings: 'Impostazioni',
            linkNotifications: 'Avvisi',
            notifications: {
                title: 'Avvisi',
                closedPr: 'chiudi tutti i tuoi pull request',
                inRepo: 'nel repository',
                markAsSeen: 'Segna come già letto'
            }
        },
        login: {
            headline: 'Login',
            errorMessage: 'Login fallito',
            username: 'Nome utente',
            btn: {
                login: 'Login'
            },
            oauthGithub: 'Login with GitHub'
        },
        dashboard: {
            headline: {
                openRequest: 'PR aperti'
            },
            filter: {
                byOldest: 'in ordine decrescente di età',
                byNewest: 'in ordine ascendente di età'
            },
            pullRequest: {
                assign: {
                    toMe: 'assegna a me',
                    unassign: 'ritirare',
                    modal: {
                        headline: 'Pull request è già assegnato.',
                        text: 'Lo vuoi davvero assegnare a te?'
                    }
                },
                infos: {
                    linesAdded: 'Righe aggiunti',
                    linesRemoved: 'Righe cancellati',
                    filesChanged: 'Files cambiati',
                    comments: 'Commenti',
                    build: 'Build'
                }
            }
        },
        ranking: {
            headline: 'Classifica utenti',
            tabs: {
                day: 'Giorno',
                week: 'Settimana',
                month: 'Mese',
                allTime: 'Permanante'
            },
            userInfos: {
                score: 'punteggio',
                prDone: 'Chiudi i pull request',
                linesAdded: 'Righe aggiunti',
                linesRemoved: 'Righe cancellati',
                filesChanged: 'Files cambiati'
            }
        },
        settings: {
            headline: {
                repo: 'Selezione di repository',
                settings: 'Impostazioni'
            },
            filter: {
                select: {
                    all: 'seleziona tutti',
                    none: 'deseleziona tutti'
                },
                search: 'Cerca'
            }
        }
    });
