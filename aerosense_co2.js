import * as m from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['CO2_Display_v1'],
    model: 'CO2_Display_v1',
    vendor: 'AeroSense',
    description: 'AeroSense Zigbee CO2, Temperature & Humidity Monitor with Display',
    extend: [
        m.deviceEndpoints({"endpoints": {"10": 10, "11": 11}}),
        m.temperature({"endpointNames": ["10"]}),
        m.humidity({"endpointNames": ["10"]}),
        m.co2({"endpointNames": ["11"]}),
    ],
};
