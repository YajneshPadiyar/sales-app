import request from '../request';

describe('request', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });


  describe('stub success response', () => {
      beforeEach(() => {
        const response = new Response('{"A":"a"}', {
          status: 200,
          headers: {
            'Content-type': 'application/json',
          },
        });
        window.fetch.mockReturnValue(Promise.resolve(response));
      });

      it('should format correctly', done => {
        request('/testurl')
        .catch(done)
        .then((json) => {
          expect(json.A).toBe('a');
          done();
        });
      });
  });

  describe('stub 204 and 205 response', () => {
    beforeEach(() => {
      const response = new Response('{}', {
        status: 204,
        headers: {
          'Content-type': 'application/json'
        }
      });
      window.fetch.mockReturnValue(Promise.resolve(response));
    });

    it('should return empty response', done => {
      request('/testurl')
      .catch(done)
      .then((json) =>{
        expect(json).toBeNull();
        done();
      });
    });
  });

  describe('stub 204 and 205 response', () => {
    beforeEach(() => {
      const response = new Response('{}', {
        status: 404,
        statusText: "Not Found",
        headers: {
          'Content-type': 'application/json'
        }
      });
      window.fetch.mockReturnValue(Promise.resolve(response));
    });

    it('should return empty response', done => {
      request('/testurl')
      .catch((err) =>{
        expect(err.response.status).toBe(404);
        expect(err.response.statusText).toBe("Not Found");
        done();
      });
    });
  });
});
