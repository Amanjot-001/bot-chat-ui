import alert from '../assets/images/warning.png'
import nexus from '../assets/images/nexus.png'

export const userData = [
    {
        msg: 'Show me the critical incident with open status for naxus Saas application.',
    },
    {
        msg: 'What are the latest updates to associated resources?',
    },
];

export const adminData = [
    {
        msg: 'Here are the currently open incidents from Nexus Saas:',
        response: [
            {
                img: alert,
                info: 'High Traffic Alert: Traffic Volume Exceeded Threshold on',
                tag: 'nexus-frontend',
                time: '08:50  AM',
            },
            {
                img: alert,
                info: 'Error Rate Alert: Error Frequency Surpassed Threshold on',
                tag: 'nexus-frontend',
                time: '08:50  AM',
            }
        ]
    },
    {
        msg: 'See the data below from recent changes to related resources',
        response: [
            {
                msg: ''
            }
        ]
    }
];
