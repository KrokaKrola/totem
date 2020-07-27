import React, { memo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import LogoIcon from 'assets/svg/logo.svg';

const Logo = () => {
  const history = useHistory();
  console.log(
    history
  )
  if (history.location.pathname === '/') {
    return <ReactSVG src={LogoIcon} />;
  }
  return (
    <Link to="/">
      <ReactSVG src={LogoIcon} />
    </Link>
  );
};

export default memo(Logo);
