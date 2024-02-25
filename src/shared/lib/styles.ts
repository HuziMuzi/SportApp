import {Dimensions, StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  // helpers
  footerSpacer: {height: 100},
  contentContainer: {paddingBottom: 200},
  contentContainerExtra: {paddingBottom: 300},
  border0: {borderWidth: 0},
  border1: {borderWidth: 1},
  borderTop1: {borderTopWidth: 1},
  borderRight1: {borderRightWidth: 1},
  borderBottom1: {borderBottomWidth: 1},
  borderLeft1: {borderLeftWidth: 1},
  hidden: {display: 'none'},
  dimmed: {opacity: 0.5},

  // font family
  ffMR: {fontFamily: 'Montserrat-Regular'},
  // fontFamily: 'Montserrat-SemiBold'

  // font weights
  fw600: {fontWeight: '600'},
  bold: {fontWeight: 'bold'},
  fw500: {fontWeight: '500'},
  semiBold: {fontWeight: '500'},
  fw400: {fontWeight: '400'},
  normal: {fontWeight: '400'},
  fw300: {fontWeight: '300'},
  light: {fontWeight: '300'},
  fw200: {fontWeight: '200'},

  // font sizes
  f9: {fontSize: 9},
  f10: {fontSize: 10},
  f11: {fontSize: 11},
  f12: {fontSize: 12},
  f13: {fontSize: 13},
  f14: {fontSize: 14},
  f15: {fontSize: 15},
  f16: {fontSize: 16},
  f17: {fontSize: 17},
  f18: {fontSize: 18},

  // margins
  mr2: {marginRight: 2},
  mr5: {marginRight: 5},
  mr10: {marginRight: 10},
  mr20: {marginRight: 20},
  ml2: {marginLeft: 2},
  ml5: {marginLeft: 5},
  ml10: {marginLeft: 10},
  ml20: {marginLeft: 20},
  mt2: {marginTop: 2},
  mt5: {marginTop: 5},
  mt10: {marginTop: 10},
  mt20: {marginTop: 20},
  mb2: {marginBottom: 2},
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb20: {marginBottom: 20},

  // paddings
  p2: {padding: 2},
  p5: {padding: 5},
  p10: {padding: 10},
  p20: {padding: 20},
  pr2: {paddingRight: 2},
  pr5: {paddingRight: 5},
  pr10: {paddingRight: 10},
  pr20: {paddingRight: 20},
  pl2: {paddingLeft: 2},
  pl5: {paddingLeft: 5},
  pl10: {paddingLeft: 10},
  pl20: {paddingLeft: 20},
  pt2: {paddingTop: 2},
  pt5: {paddingTop: 5},
  pt10: {paddingTop: 10},
  pt20: {paddingTop: 20},
  pb2: {paddingBottom: 2},
  pb5: {paddingBottom: 5},
  pb10: {paddingBottom: 10},
  pb20: {paddingBottom: 20},
  px5: {paddingHorizontal: 5},
  px16: {paddingHorizontal: 16},
  py5: {paddingVertical: 5},

  // gaps
  rgp20: {rowGap: 20},
  gp20: {gap: 20},
  gp10: {gap: 10},

  // flex
  flexRow: {flexDirection: 'row'},
  flexCol: {flexDirection: 'column'},
  flex1: {flex: 1},
  flexGrow1: {flexGrow: 1},
  alignCenter: {alignItems: 'center'},
  alignBaseline: {alignItems: 'baseline'},
  justifyCenter: {justifyContent: 'center'},
  justifyBetween: {justifyContent: 'space-between'},

  // position
  absolute: {position: 'absolute'},

  // dimensions
  w100pct: {width: '100%'},
  h100pct: {height: '100%'},
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  // text align
  textLeft: {textAlign: 'left'},
  textCenter: {textAlign: 'center'},
  textRight: {textAlign: 'right'},

  //zIndex
  z1: {zIndex: 1},
});
