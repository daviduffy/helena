// main assets
import cover from '../../assets/images/cover.jpg';

// commercials
import aller from '../../assets/images/commercials/medium/allergease.jpg';
import aller_bg from '../../assets/images/commercials/medium/allergease_bg.jpg';
import att from '../../assets/images/commercials/medium/att.jpg';
import att_bg from '../../assets/images/commercials/medium/att_bg.jpg';
import be_cr from '../../assets/images/commercials/medium/be_creative_again.jpg';
import be_cr_bg from '../../assets/images/commercials/medium/be_creative_again_bg.jpg';
import bridg from '../../assets/images/commercials/medium/bridgestone.jpg';
import bridg_bg from '../../assets/images/commercials/medium/bridgestone_bg.jpg';
import carni from '../../assets/images/commercials/medium/carnival_cruise.jpg';
import carni_bg from '../../assets/images/commercials/medium/carnival_cruise_bg.jpg';


// illustrations
import i_1 from '../../assets/images/illustrations/medium/IMG_0998.JPG';
import i_2 from '../../assets/images/illustrations/medium/IMG_0999.JPG';
import i_3 from '../../assets/images/illustrations/medium/IMG_1001.JPG';
import i_4 from '../../assets/images/illustrations/medium/IMG_1002.JPG';
import i_5 from '../../assets/images/illustrations/medium/IMG_1003.JPG';
import i_6 from '../../assets/images/illustrations/medium/IMG_1005.JPG';

// features
import f_1 from '../../assets/images/features/medium/TheHeelerPoster2015.jpg';
import f_2 from '../../assets/images/features/medium/monkeyman_935.jpg';
import f_3 from '../../assets/images/features/medium/setpping_high.jpg';
import f_4 from '../../assets/images/features/medium/thief.jpg';
import f_5 from '../../assets/images/features/medium/a_man_before_his_time.jpg';
import f_6 from '../../assets/images/features/medium/night_owls.jpg';
import f_7 from '../../assets/images/features/medium/sirk.jpg';
import f_8 from '../../assets/images/features/medium/william_the_magnificent.jpg';
import f_9 from '../../assets/images/features/medium/contrition.jpg';
import f_10 from '../../assets/images/features/medium/nightmare_code.jpg';
import f_11 from '../../assets/images/features/medium/targeting.jpg';
import f_12 from '../../assets/images/features/medium/gitd_movie_poster_web.jpg';
import f_13 from '../../assets/images/features/medium/on_the_outside.jpg';
import f_14 from '../../assets/images/features/medium/the_adventures_of_don_juan_and_don_tu.jpg';
import f_15 from '../../assets/images/features/medium/i_love_you.jpg';
import f_16 from '../../assets/images/features/medium/salvation_road.jpg';
import f_17 from '../../assets/images/features/medium/the_christmas_colt.jpg';

// music videos


const content = [
  {
    index: 0,
    name: 'commercials',
    icon: 'fa-star-o',
    mosaic: false,
    featCards: [
      {
        key: 0,
        src: aller,
        bg_src: aller_bg,
        title: 'AllergEase',
        subtitle: "Don't Miss a Moment!"
      },
      {
        key: 1,
        src: att,
        bg_src: att_bg,
        title: 'AT&T',
        subtitle: 'Incredible Game Winning Play!'
      },
      {
        key: 2,
        src: be_cr,
        bg_src: be_cr_bg,
        title: 'Umano Productions',
        subtitle: 'Be Creative Again.'
      },
      {
        key: 3,
        src: bridg,
        bg_src: bridg_bg,
        title: 'Bridgestone',
        subtitle: 'Tire vs. Olympic Archer'
      }
    ],
    moreCards: [
      {}
    ]

  },
  {
    index: 1,
    name: 'illustrations',
    icon: 'fa-picture-o',
    mosaic: true,
    featCards: [
      {
        key: 0,
        src: '',
        bg_src: i_1,
        title: 'Wonder Woman',
        subtitle: 'lorem ipsum dolor'
      },
      {
        key: 1,
        src: '',
        bg_src: i_2,
        title: 'Space Hulk Hogan',
        subtitle: 'lorem ipsum dolor'
      },
      {
        key: 2,
        src: '',
        bg_src: i_3,
        title: 'The Flash',
        subtitle: 'lorem ipsum dolor'
      },
      {
        key: 3,
        src: '',
        bg_src: i_4,
        title: 'Some Hoe',
        subtitle: 'lorem ipsum dolor'
      }
    ],
    moreCards: [
      {}
    ]
  },
  {
    index: 2,
    name: 'features',
    icon: 'fa-film',
    mosaic: true,
    featCards: [
      {
        key: 0,
        src: '',
        bg_src: f_1,
        title: '',
        subtitle: ''
      },
      {
        key: 1,
        src: '',
        bg_src: f_2,
        title: '',
        subtitle: ''
      },
      {
        key: 2,
        src: '',
        bg_src: f_3,
        title: '',
        subtitle: ''
      },
      {
        key: 3,
        src: '',
        bg_src: f_4,
        title: '',
        subtitle: ''
      }
    ],
    moreCards: [
      {}
    ]
  },
  {
    index: 3,
    name: 'music videos',
    icon: 'fa-television',
    mosaic: false,
    featCards: [
      {
        key: 0,
        src: '',
        bg_src: '',
        title: '',
        subtitle: ''
      },
      {
        key: 1,
        src: '',
        bg_src: '',
        title: '',
        subtitle: ''
      },
      {
        key: 2,
        src: '',
        bg_src: '',
        title: '',
        subtitle: ''
      },
      {
        key: 3,
        src: '',
        bg_src: '',
        title: '',
        subtitle: ''
      }
    ],
    moreCards: [
      {}
    ]
  }
];

export default content;
export { cover };
