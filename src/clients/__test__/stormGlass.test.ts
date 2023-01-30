import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stromglass_normalized_response_3_hours.json';


jest.mock('axios');

describe('StromGlass client', () => {
    it('should return the normalized forecast from the StromGlass service', async () => {
        const lat = -33.792726;
        const lng = 151.289824;

        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

        const stromGlass = new StormGlass(axios);
        const response = await stromGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalized3HoursFixture);
    })
})