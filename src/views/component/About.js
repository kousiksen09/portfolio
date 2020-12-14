import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { pxToVw, pxToRem, pxToVh } from '../../utils/theme';
import clsx from 'clsx';
import { Typography, Button } from '@material-ui/core';
import prc from '../../assets/prc.jpg';
import bgOne from '../../assets/bgOne.jfif';
import CloseIcon from '@material-ui/icons/Close';
import Header from './Header';
import GetAppIcon from '@material-ui/icons/GetApp';
import Resume from '../../assets/Kousik_Resume.pdf';
import { currPageAction } from './../../Redux/actions/CurrPageAction';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  drawerOpenCon: {
    width: '82vw',
    left: '17vw',
    position: 'absolute',
  },
  drawerNotOpenCon: {
    width: '100%',
    position: 'absolute',
  },
  about: {
    backgroundImage: `url(${bgOne})`,
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    position: 'absolute',
    background: 'rgba(0,0,0,0.1)',
  },
  titleText: {
    fontFamily: "'Fondamento', cursive",
    position: 'relative',
    letterSpacing: '1rem',
    paddingTop: '2%',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '4rem',
    color: '#e2dae6',
  },
  imgPr: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  prImg: {
    marginTop: pxToRem(50),

    height: pxToVh(230),
    borderRadius: '50%',
    border: '0.3rem solid #3d3b3b',
    transition: 'all .5s',
  },
  zoomImageDiv: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    width: '82vw',
    left: '11vw',
    top: pxToVh(-30),
    justifyContent: 'center',
  },
  zoomImage: {
    margin: pxToRem(20),
    height: '100vh',
    width: '80vw',
    border: '0.3rem solid #3d3b3b',
  },
  closeIcon: {
    position: 'relative',
    height: '4vh',
    width: '4vw',
    top: pxToVh(22),
    right: pxToVw(22),
    color: '#fff',
    border: '0.2rem solid red',
  },
  rightSection: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  objective: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    margin: pxToRem(12),
  },
  subTitle: {
    fontFamily: " 'Yeon Sung', cursive",
    position: 'absolute',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '3rem',
    color: '#e2dae6',
  },
  tagLine: {
    fontFamily: " 'Yeon Sung', cursive",
    position: 'absolute',
    top: '10vh',
    margin: '0 2rem 2rem 0',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#e2dae6',
  },
  resumeButton: {
    top: '22vh',
    height: '3rem',
    width: '10rem',
    background: '#ed8728',
    color: '#FFFFFF',
    borderRadius: '2rem',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#ba9013',
    },
  },
  nextPage: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
    justifyContent: 'flex-end',
    top: '84vh',
    right: '4vw',
  },
  nextPageBtn: {
    height: '4rem',
    width: '12rem',
    background: '#9e1c66',
    color: '#FFFFFF',
    borderRadius: '2rem',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#a80f4a',
    },
  },
  btnTxt: {
    fontSize: '1.4rem',
  },
}));
function About() {
  const open = useSelector((state) => state.DrawerReducer.open);
  const [modalOpen, setModalOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const classes = useStyles();

  return (
    dispatch(currPageAction({ currPage: 'About' })),
    (
      <div
        className={clsx(
          open ? classes.drawerOpenCon : classes.drawerNotOpenCon
        )}
      >
        <div className={classes.about}>
          <Header />
          <div className={classes.imgPr}>
            <img
              src={prc}
              alt='Kousik Sen'
              className={classes.prImg}
              onClick={() => handleModalOpen()}
            />
          </div>
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
          >
            <>
              <div className={classes.rightSection}>
                <CloseIcon
                  onClick={() => handleModalClose()}
                  className={classes.closeIcon}
                />
              </div>
              <div className={classes.zoomImageDiv}>
                <img src={prc} alt='Kousik Sen' className={classes.zoomImage} />
              </div>
            </>
          </Modal>

          <Typography variant='h3' className={classes.titleText}>
            KOUSIK SEN
          </Typography>

          <div className={classes.objective}>
            <Typography variant='h3' className={classes.subTitle}>
              WEB DEVELOPER | IoT Architect
            </Typography>
            <Typography variant='h3' className={classes.tagLine}>
              Inovation + Design + Develop make the world beautiful. Have 3
              years of experience in responsive UI Design and 2 years of
              experience in IoT.
            </Typography>
            <Button
              variant='contained'
              className={classes.resumeButton}
              classes={{ label: classes.btnTxt }}
              onClick={() => window.open(Resume)}
              startIcon={
                <GetAppIcon style={{ height: '2rem', width: '2rem' }} />
              }
            >
              Resume
            </Button>
          </div>
        </div>
        <div className={classes.nextPage}>
          <Link to='/education'>
            <Button
              endIcon={
                <ArrowForwardIcon style={{ height: '2rem', width: '2rem' }} />
              }
              className={classes.nextPageBtn}
              classes={{ label: classes.btnTxt }}
            >
              Education
            </Button>
          </Link>
        </div>
      </div>
    )
  );
}

export default About;