import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Home = ({color}: {color?: any}) => {
  return (
    <Svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.691406 11.9414C0.691406 12.5508 1.14844 13.0664 1.89844 13.0664C2.26172 13.0664 2.57812 12.8789 2.85938 12.6328L4.20703 11.5078V22.418C4.20703 24.1523 5.25 25.1719 7.03125 25.1719H22.8867C24.668 25.1719 25.7109 24.1523 25.7109 22.418V11.4375L27.1406 12.6328C27.4219 12.8789 27.7383 13.0664 28.1016 13.0664C28.7812 13.0664 29.2969 12.6445 29.2969 11.9766C29.2969 11.5781 29.1445 11.2617 28.8398 11.0156L25.7109 8.37891V3.39844C25.7109 2.87109 25.3711 2.53125 24.8438 2.53125H23.2617C22.7461 2.53125 22.3945 2.87109 22.3945 3.39844V5.58984L16.6523 0.761719C15.6445 -0.0820312 14.3789 -0.0820312 13.3594 0.761719L1.14844 11.0156C0.84375 11.2734 0.691406 11.6133 0.691406 11.9414ZM18.3633 15.1875C18.3633 14.6367 18.0117 14.2852 17.4609 14.2852H12.5273C11.9883 14.2852 11.6133 14.6367 11.6133 15.1875V22.875H7.64062C6.90234 22.875 6.50391 22.4648 6.50391 21.7266V9.57422L14.5078 2.87109C14.8242 2.58984 15.1875 2.58984 15.5039 2.87109L23.4141 9.50391V21.7266C23.4141 22.4648 23.0156 22.875 22.2773 22.875H18.3633V15.1875Z"
        fill={color}
      />
    </Svg>
  );
};
