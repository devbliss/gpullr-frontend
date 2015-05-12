'use strict';
angular.module('translateModule')
    .constant('TranslateConstPl', {
        global: {
            btn: {
                save: 'Zachowaj',
                cancel: 'Anuluj',
                confirm: 'Potwierdź'
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
            linkPullrequest: 'Wszystkie prośby',
            linkRanking: 'Ranking',
            linkSettings: 'Ustawienia',
            linkNotifications: 'Powiadomienia',
            notifications: {
                title: 'Powiadomienia',
                closedPr: 'zamknął twoją prośbę o połączenie',
                inRepo: 'w repozytorium',
                markAsSeen: 'oznaczyć wszystkie jako przeczytane'
            }
        },
        login: {
            headline: 'Logowanie',
            errorMessage: 'Błąd logowania',
            username: 'Użytkownik',
            btn: {
                login: 'Login'
            },
            oauthGithub: 'Login with GitHub'
        },
        dashboard: {
            headline: {
                openRequest: 'Otwarte prośby o połączenie'
            },
            filter: {
                byOldest: 'najpierw najstarsze',
                byNewest: 'najpierw najnowsze'
            },
            pullRequest: {
                assign: {
                    toMe: 'sobie przydzielić',
                    unassign: 'cofnąć przydzielenie',
                    modal: {
                        headline: 'Prośba o połączenie już jest przydzielona',
                        text: 'Czy na pewno chcesz to sobie przydzielić?'
                    }
                },
                infos: {
                    linesAdded: 'Dodane linijki',
                    linesRemoved: 'Usuniete linijki',
                    filesChanged: 'Zmienione pliki',
                    comments: 'komentarze',
                    createdAt: 'Wiek prośby o połączenie',
                    build: 'Budowa'
                }
            }
        },
        ranking: {
            headline: 'Ranking użytkowników',
            tabs: {
                day: 'Dzień',
                week: 'Tydzień',
                month: 'Miesiąc',
                allTime: 'Cały czas'
            },
            userInfos: {
                score: 'Punkty',
                prDone: 'Zamknięte prośby o połączenie',
                linesAdded: 'Dodane linijki',
                linesRemoved: 'Usuniete linijki',
                filesChanged: 'Zmienione pliki'
            }
        },
        settings: {
            headline: {
                repo: 'Filtrowanie repozytoriów',
                settings: 'Ustawienia'
            },
            filter: {
                select: {
                    all: 'wszystkie wybrać',
                    none: 'wszystkie odznaczyć'
                },
                search: 'szukać'
            }
        }
    });
