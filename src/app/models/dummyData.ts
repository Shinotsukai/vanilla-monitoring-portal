export class dummyData{
    name:string='';
    address:string='';
    telephone:number=0
    percent:number=0;
    money:number=0.0
}

export const testList:dummyData[] =[
    {
        name:'bob jones',
        address:'10 some address',
        telephone:123456789,
        percent:25,
        money:5.25

    },
    {
        name:'bob jones',
        address:'10 some address',
        telephone:123456789,
        percent:25,
        money:5.25

    },
    {
        name:'bob jones',
        address:'10 some address',
        telephone:123456789,
        percent:25,
        money:5.25

    },
    {
        name:'bob jones',
        address:'10 some address',
        telephone:123456789,
        percent:25,
        money:5.25

    }
]

export class dummySensorData{
    device_name:string='';
    payload_decoded:SensorReading[]=[];
}


export class SensorReading{
    sensor_id?:number=0;
    measure:string='';
    reading:number = 0;
}

export const sensorList:dummySensorData[] = [
    {
        device_name:'Air_Qual_1',
        payload_decoded:[
            {                sensor_id:5,
                measure:'Temp',
                reading:21.5
            },
            {
                sensor_id:4,
                measure:'Humidity',
                reading:48
            },
            {  
                sensor_id:1,
                measure:'Co2',
                reading:0.5
            },
            {
                sensor_id:1,
                measure:'TVOC',
                reading:0.8
            },
        ]
    },

    {
        device_name:'Air_Qual_2',
        payload_decoded:[
            {
                sensor_id:5,
                measure:'Temp',
                reading:21.5
            },
            {
                sensor_id:4,
                measure:'Humidity',
                reading:48
            },
            {
                sensor_id:1,
                measure:'Co2',
                reading:0.5
            },
        ]
    },

    {
        device_name:'Air_Qual_3',
        payload_decoded:[
            {
                sensor_id:5,
                measure:'Temp',
                reading:21.5
            },
            {
                sensor_id:4,
                measure:'Humidity',
                reading:48
            },
            {                sensor_id:1,
                measure:'Co2',
                reading:0.5
            },
        ]
    },


    {
        device_name:'Air_Qual_4',
        payload_decoded:[
            {
                sensor_id:5,
                measure:'Temp',
                reading:21.5
            },
            {
                sensor_id:4,
                measure:'Humidity',
                reading:48
            },
            {
                sensor_id:1,
                measure:'Co2',
                reading:0.5
            },
        ]
    }
]

export class RigSettings{
    _id:string='';
    name:string='';
    location?:string='';
    slots:SlotSettings[]=[];
}

export class SlotSettings{
    device_name:string='';
}

export const rigList:RigSettings[]=[
    {
        _id:'as5d8asd',
        name:'Test Rig 1',
        location:'Back Office',
        slots:[
            {
                device_name:'Air_Qual_2'
            }
        ]

    },

    {
        _id:'13sd5sdf',
        name:'Test Rig 2',
        location:'Back Office 1',
        slots:[
            {
                device_name:'Air_Qual_1'
            }
        ]

    },

    {
        _id:'sf482asd65',
        name:'Test Rig 3',
        location:'Back Office 2',
        slots:[
            {
                device_name:'Air_Qual_3'
            },
            {
                device_name:'Air_Qual_4'
            }
        ]

    }
]

export class DeviceDetails{
    device_name:string='';
    sensors:SensorDetail[]=[];
    dateAdded:Date=new Date();
}

export class SensorDetail{
    sensorType:string='';
}

export const DeviceConfig:DeviceDetails[]=[
    {device_name:'Air_Qual_1',
    sensors:[
        {sensorType:'CO2'},
        {sensorType:'Temperature'},
        {sensorType:'Humidity'},
        {sensorType:'PM1'},
        {sensorType:'PM2.5'}
    ],
dateAdded:new Date()},
    {device_name:'Air_Qual_2',
    sensors:[
        {sensorType:'TVOC'},
        {sensorType:'CO2'},
        {sensorType:'Temperature'},
        {sensorType:'Humidity'}
    ],
    dateAdded:new Date()},
    {device_name:'Air_Qual_3',
    sensors:[
        {sensorType:'Temperature'},
        {sensorType:'Humidity'},
        {sensorType:'PM1'},
        {sensorType:'PM2.5'}
    ],
    dateAdded:new Date()},

    {device_name:'Air_Qual_4',
    sensors:[
        {sensorType:'CO2'},
        {sensorType:'Temperature'},
        {sensorType:'Humidity'},
        {sensorType:'PM1'},
        {sensorType:'PM2.5'},
        {sensorType:'PM10'}
    ],
    dateAdded:new Date()},
]