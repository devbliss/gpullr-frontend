'use strict';

describe('pullRequestService', function () {
    var service,
        $httpBackend,
        response;

    beforeEach(function () {
        module('dashboardModule');

        inject(function (pullRequestService, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            service = pullRequestService;
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('getPullRequests', function () {
        var expectedUrl = '/api/pulls',
            responseData =
            {
                items: [
                    {
                        id: 12345,
                        title: 'Update 3001-angularjs-styleguide.md',
                        url: 'https://github.com/devbliss/manuals/pull/44',
                        repository: 'manuals',
                        author: {
                            username: 'Ömer Karahan',
                            avatarUrl: 'https://avatars2.githubusercontent.com/u/3127128?v=3'
                        },
                        creationDate: '2015-02-11T12:12:31Z',
                        filesChanged: 1,
                        linesAdded: 112,
                        linesRemoved: 0,
                        assignee: null,
                        status: 'Merged'
                    }, {
                        id: 12345,
                        title: 'refactor/testSourceSets',
                        url: 'https://github.com/devbliss/ecosystem-course-aggregation/pull/49',
                        repository: 'ecosystem-course-aggregation',
                        author: {
                            username: 'Elena Shafranova',
                            avatarUrl: 'https://avatars3.githubusercontent.com/u/1777303?v=3'
                        },
                        creationDate: '2015-02-11T13:12:31Z',
                        filesChanged: 15,
                        linesAdded: 334,
                        linesRemoved: 313,
                        assignee: {
                            username: 'marcelb',
                            avatarUrl: 'https://avatars1.githubusercontent.com/u/308374?v=3'
                        },
                        status: 'Open'
                    }
                ]
            },
            successPayload = {data: responseData, status: 200},
            errorPayload = {
                data: {errorKey: 'AnyErrorKey', errorMessage: 'assign pull request failed'},
                status: 400
            };

        beforeEach(function () {
            response = $httpBackend.expectGET(expectedUrl).respond(successPayload.status, successPayload.data);
        });

        it('calls correct URL', function () {
            expect(service.getPullRequests()).toBeDefined();

            $httpBackend.flush();
        });

        it('returns correct data', function () {
            var result = null;

            service.getPullRequests().then(function (pullRequests) {
                result = pullRequests;
            });

            $httpBackend.flush();
            expect(result).toEqual(responseData.items);
        });

        it('forwards error', function () {
            response.respond(errorPayload.status, errorPayload.data);

            service.getPullRequests().then(function (successResponse) {
                expect(successResponse).toBeNull();
            }, function (errorResponse) {
                expect(errorResponse.data).toEqual(errorPayload.data);
            });

            $httpBackend.flush();
        });
    });
    
    describe('assignPullRequest', function () {
        var pr = {id: 12345, repoName: 'testRepo'},
            expectedUrl = '/api/pulls/' + pr.id,
            successPayload = {status: 204},
            errorPayload = {
                data: {errorKey: 'AnyErrorKey', errorMessage: 'assign pull request failed'},
                status: 400
            };

        beforeEach(function () {
            response = $httpBackend.expectPOST(expectedUrl).respond(successPayload.status);
        });

        it('calls correct URL', function () {
            expect(service.assignPullRequest(pr.id)).toBeDefined();

            $httpBackend.flush();
        });

        it('returns correct data', function () {
            var success = null;

            service.assignPullRequest(pr.id).then(function () {
                success = true;
            });

            $httpBackend.flush();
            expect(success).toBeTruthy();
        });

        it('forwards error', function () {
            response.respond(errorPayload.status, errorPayload.data);

            service.assignPullRequest(pr.id).then(function (successResponse) {
                expect(successResponse).toBeNull();
            }, function (errorResponse) {
                expect(errorResponse.data).toEqual(errorPayload.data);
            });

            $httpBackend.flush();
        });
    });
});
