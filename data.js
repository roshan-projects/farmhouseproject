// FARM HOUSES DATA - CUSTOMIZATION GUIDE
//
// FARM IMAGE URL: Replace URLs in images array with your farm photos
// FARM VIDEO URL: Replace URLs in videos array with YouTube/Vimeo embeds
// MAP URL EMBED: Replace mapUrl property with your Google Maps location
// PHONE NUMBER: Phone is stored in phone property (used for WhatsApp)
// CHANGE PHONE NUMBER: Update WHATSAPP_PHONE constant below

// CHANGE PHONE NUMBER HERE: Update your WhatsApp number (10 digits, no +91)
const WHATSAPP_PHONE = '8019609632';

const farmHousesData = {
    'Nature Retreat': {
    id: 'nature retreat',
    name: 'Nature Retreat',
    instagram: 'https://www.instagram.com/natureretreatbyv1?igsh=MWU5NmV2aDVmODcwZQ==',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.496308188629!2d78.7286313!3d17.569453499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb79548de7d271%3A0x1e6304f79ab99fb6!2sNaturaleza%20Staycation!5e1!3m2!1sen!2sin!4v1763184189347!5m2!1sen!2sin',
    openMapUrl: 'https://maps.app.goo.gl/th12FZJ5qw3xpapT9',
    images: [
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763010743/nature_image_1_v1qfuh.jpg',
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763010954/nature_image_2_zmvbrx.jpg',
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763011057/nature_image_3_l0kyl5.jpg',
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763011142/nature_image_4_ghj3mr.jpg',
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763011221/nature_image_5_ccnu5l.jpg',
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763011341/nature_image_6_kbvvff.jpg',
        'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763011519/nature_image_7_q10czp.jpg'
    ],
    videos: [
        'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763128503/nature_video_1_oofxhh.mp4',
        'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763128781/nature_video_2_dexavm.mp4',
        'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763128923/natre_video_3_ppyxwb.mp4'
    ],
    description: 'Experience the perfect blend of luxury and nature at Nature Farm House. This stunning property features modern amenities amidst serene countryside views, making it ideal for family gatherings and corporate retreats.',
    amenities: [
        'Swimming Pool',
        'Bonfire',
        'Cycling Track',
        'Projector & Outdoor Screening',
        'Fully Air-Conditioned Bedrooms',
        'Landscaped Gardens',
        'Indoor Games',
        'BBQ Area'
    ],
    price: 5000,
    phone: '8019609632'
},

    'Creekvalley': {
        id: 'creekvalley',
        name: 'Creekvalley',
        instagram: 'https://www.instagram.com/creekvalleybyv1?igsh=c3c0aXAyeTh1Y3Np',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.1682984609124!2d78.8938026!3d18.2729416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccef890b7e72c1%3A0x21d9179c224f9f53!2sCreekValley!5e1!3m2!1sen!2sin!4v1763184296293!5m2!1sen!2sin',
        openMapUrl: 'https://maps.app.goo.gl/n53KQhU6rvgAQ8MS9',
        
        images: [
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763131544/creek_valley_1_bt90jz.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763131692/creekvalley2_haltki.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763131787/creek_valley_3_rf0yas.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763131891/creek_valley_4_hzxxfb.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763131971/creek_valley_5_qe4tg3.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763132059/creek_valley_6_y92t5k.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763132169/creek_valley_7_tysdsl.jpg'
        ],
        videos: [
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763132408/creek_valley_video_1_daxrkg.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763137065/creek_valley_video_2_yiypac.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763202316/creek_valley_video_3_u9p56x.mp4'
        ],
        description: 'Nestled along a serene creek, this valley retreat offers tranquility and luxury in perfect harmony. Ideal for those seeking peace, natural beauty, and modern comforts in an idyllic countryside setting.',
        amenities: [
            'Swimming Pool',
    'Bonfire',
    'Cycling Track',
    'Projector & Outdoor Screening',
    'Fully Air-Conditioned Bedrooms',
    'Landscaped Gardens',
    'Indoor Games',
    'BBQ Area'
        ],
        price: 6000,
        phone: '8019609632'
    },
    'Casablanca': {
        id: 'casablanca',
        name: 'Casablanca',
        instagram: 'https://www.instagram.com/casablancabyv1?igsh=eXh2MGx1eWg5Mnd2',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.6045493692072!2d77.8771837!3d17.513901500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9573cd9d58839%3A0x7e67141972b8881f!2sForest%20Park%20Retreat!5e1!3m2!1sen!2sin!4v1763184426397!5m2!1sen!2sin',
        openMapUrl: 'https://maps.app.goo.gl/qysGUVBUWWGxQo368',
        images: [
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763139212/casablanca_image_3_mfurhg.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763139082/casablanca_image_2_vbhj63.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763138940/casablanca_image_1_sdqa4a.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763139491/casablanca_image_5_woucm8.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763139560/casablanca_image_6_jwkgp7.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763139710/casablanca_image_7_ffkubt.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763139815/casablanca_image_8_eiyahn.jpg'
        ],
        videos: [
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763139899/casablanca_video_1_l9ewhw.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763140000/casablanca_video_2_vbooet.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763140081/casablanca_video_3_i2ykz6.mp4'
        ],
        description: 'Step into Mediterranean elegance at Casablanca. Inspired by Moroccan architecture and luxury, this premium villa offers stunning white-washed aesthetics, lush greenery, and state-of-the-art facilities for an extraordinary experience.',
        amenities: [
            'Swimming Pool',
            'Bonfire',
            'Cycling Track',
            'Projector & Outdoor Screening',
            'Fully Air-Conditioned Bedrooms'
        ],
        price: 7000,
        phone: '8019609632'
    },
    'Santorini': {
        id: 'santorini',
        name: 'Santorini',
        instagram: 'https://www.instagram.com/santorini_farmhousebyv1?igsh=aHpyNXM2bzBpZWxv',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4984680431176!2d78.43150159999999!3d17.569345400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f007feb5681%3A0x1ea54acfb70d1590!2sSantorini!5e1!3m2!1sen!2sin!4v1763184502098!5m2!1sen!2sin',
        openMapUrl: 'https://maps.app.goo.gl/GCU4xVg6qWkdZzxRA',
        images: [
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763140445/santorini_image_1_ayrvgo.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763140537/santorini_image_2_dhozm4.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763140644/santorini_image_3_kfvqis.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763140909/santorini_image_4_vj5kot.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763141008/santorini_image_5_rirffg.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763141093/santorini_image_6_m4dyma.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763141166/santorini_image_7_jc2yhr.jpg'
        ],
        videos: [
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763141250/santorini_video_1_gydnwk.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763141370/santorini_video_2_nb4vr5.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763141475/santorini_video_3_vbj8z6.mp4'
        ],
        description: 'Inspired by the Greek island paradise, Santorini brings white-washed luxury and azure blue accents to Hyderabad. Enjoy breathtaking views, elegant architecture, and premium hospitality in this exclusive retreat.',
        amenities: [
            'Swimming Pool',
    'Bonfire',
    'Cycling Track',
    'Projector & Outdoor Screening',
    'Fully Air-Conditioned Bedrooms',
    'Landscaped Gardens',
    'Indoor Games',
    'BBQ Area'
        ],
        price: 5500,
        phone: '8019609632'
    },
    'Le ceilo': {
        id: 'le ceilo',
        name: 'Le ceilo',
        instagram: 'https://www.instagram.com/leceilobyv1?igsh=bmwxZDloNHdienV5',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.1682984609124!2d78.8938026!3d18.2729416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccef890b7e72c1%3A0x21d9179c224f9f53!2sCreekValley!5e1!3m2!1sen!2sin!4v1763184575234!5m2!1sen!2sin',
        openMapUrl: 'https://maps.app.goo.gl/n53KQhU6rvgAQ8MS9', 
        images: [
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142096/le_ceilo_image_2_qtkqdq.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142051/le_ceilo_image_1_vxvnn4.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142254/le_ceilo_image_4_uaecpk.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142410/le_ceilo_image_6_wdvtxw.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142410/le_ceilo_image_6_wdvtxw.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142419/le_ceilo_image_7_tffg9b.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763142640/le_ceilo_image_7_final_r582t5.jpg'
        ],
        videos: [
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763142741/le_ceilo_video_1_a06f4v.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763142817/le_ceilo_video_2_hjih0i.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763142896/le_ceilo_video_3_ktfi9l.mp4'
        ],
        description: 'Le Ceilo represents the pinnacle of luxury farm living. With its contemporary design, premium amenities, and attention to detail, this villa promises an unforgettable experience for the discerning guest.',
        amenities: [
            'Swimming Pool',
    'Bonfire',
    'Cycling Track',
    'Projector & Outdoor Screening',
    'Fully Air-Conditioned Bedrooms',
    'Landscaped Gardens',
    'Indoor Games',
    'BBQ Area'
        ],
        price: 6500,
        phone: '8019609632'
    },
    'Dreamland farmstay': {
        id: 'dreamland farmstay',
        name: 'Dreamland farmstay',
        instagram: 'https://www.instagram.com/dreamlandfarmstaybyv1?igsh=NDd4cWc4dDRoOGZz',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.1915496553634!2d78.4561042751567!3d17.026014283800887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDAxJzMzLjciTiA3OMKwMjcnMzEuMyJF!5e1!3m2!1sen!2sin!4v1763184675248!5m2!1sen!2sin',
        openMapUrl: 'https://maps.app.goo.gl/AtbBBkD8UbQGFVLKA',
        images: [
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763144510/dream_land_image_1_olgwpl.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763144509/dream_land_image_2_xvjesb.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763144507/dream_land_image_3_qipxvb.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763144502/dream_land_image_5_st8udk.jpg',
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763144502/dream_land_image_4_huvgge.jpg',
            
            'https://res.cloudinary.com/dvxjlj88o/image/upload/v1763144510/dream_land_image_1_olgwpl.jpg'
        ],
        videos: [
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763144807/dream_land_video_1_btqykh.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763144793/dream_land_video_2_mgsjuv.mp4',
            'https://res.cloudinary.com/dvxjlj88o/video/upload/v1763144796/dream_land_video_3_n1lmsf.mp4'
        ],
        description: 'Live your dream at our signature Dream Land Farm Stay. Combining rustic charm with modern luxury, this property offers sprawling gardens, premium facilities, and warm hospitality for the perfect countryside escape.',
        amenities: [
            'Swimming Pool',
    'Bonfire',
    'Cycling Track',
    'Projector & Outdoor Screening',
    'Fully Air-Conditioned Bedrooms',
    'Landscaped Gardens',
    'Indoor Games',
    'BBQ Area'
        ],
        price: 7500,
        phone: '8019609632'
    }
};
