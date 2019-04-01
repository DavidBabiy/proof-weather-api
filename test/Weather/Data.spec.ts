import { API_KEY, CITY_ID, CITY_NAME, WEB_URL } from "../properties";
import { request, expect } from "chai";
import { OK } from "http-status-codes";


describe('Weather API', async () => {

    describe('Current weather data', async () => {

        it('should get weather data by city name', async () => {

            let cityDataRes = await request(WEB_URL).get('/data/2.5/weather')
                .query({q: CITY_NAME})
                .query({APPID: API_KEY})
                .send();
            expect(cityDataRes).to.have.property('statusCode', OK);
            expect(cityDataRes.body.id).to.equal(CITY_ID);
            expect(cityDataRes.body.name).to.equal(CITY_NAME);
            expect(cityDataRes.body.weather).to.exist;
            expect(cityDataRes.body.wind).to.exist;
            expect(cityDataRes.body.clouds).to.exist;

        });

    });

});
