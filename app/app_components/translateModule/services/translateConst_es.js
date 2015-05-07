'use strict';
angular.module('translateModule')
    .constant('TranslateConstEs', {
        global: {
            btn: {
                save: 'guardar',
                cancel: 'cancelar',
                confirm: 'confirmar'
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
            linkPullrequest: 'Todas las Solicitudes',
            linkRanking: 'Ranking',
            linkSettings: 'Configuración',
            linkNotifications: 'Notificaciones',
            notifications: {
                title: 'Notificaciones',
                closedPr: 'cierra todas tus solicitudes',
                inRepo: 'en repositorio',
                markAsSeen: 'marcar todos como leidos'
            }
        },
        login: {
            headline: 'Ingreso',
            errorMessage: 'ingreso fallido',
            username: 'Nombre de Usuario',
            btn:{
                login: 'Ingresar'
            }
        },
        dashboard: {
            headline: {
                openRequest: 'solicitudes abiertas'
            },
            filter: {
                byOldest: 'ordena decreciente por edad',
                byNewest: 'ordena ascendiente por edad'
            },
            pullRequest: {
                assign: {
                    toMe: 'asignamelo',
                    unassign: 'desasignamelo',
                    modal: {
                        headline: 'Solicitud ya asignada.',
                        text: 'Quieres realmente asignartelo?'
                    }
                },
                infos: {
                    linesAdded: 'Líneas cambiadas',
                    linesRemoved: 'Líneas borrados',
                    filesChanged: 'Archivos cambiados',
                    comments: 'Comentarios',
                    createdAt: 'Solicitud creada el',
                    build: 'Construye'
                }
            }
        },
        ranking: {
            headline: 'Ranking de Usuarios',
            tabs: {
                day: 'Día',
                week: 'Semana',
                month: 'Mes',
                allTime: 'siempre'
            },
            userInfos: {
                score: 'puntuación',
                prDone: 'Solicitudes finalizadas',
                linesAdded: 'Líneas cambiadas',
                linesRemoved: 'Líneas borrados',
                filesChanged: 'Archivos cambiados'
            }
        },
        settings: {
            headline:{
                repo: 'Seleción de Repositorio',
                settings: 'Configuración'
            },
            filter: {
                select: {
                    all: 'seleccionar todas',
                    none: 'deseleccionar todas'
                },
                search: 'Busqueda'
            }
        }
    });
