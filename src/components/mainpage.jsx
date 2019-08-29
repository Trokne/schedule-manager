import React, { Fragment } from 'react';
import '../styles/mainpage.pcss';
import Groups from '../containers/groups/groups';

const MainPage = () => (
  <Fragment>
    <div className="content">
      <div className="title">Лучшее средство управления расписанием</div>
      <div className="description">
        Создавайте группы, отмечайте домашние задания, будьте в тренде!
      </div>
      <Groups />
    </div>
  </Fragment>
);

export default MainPage;
