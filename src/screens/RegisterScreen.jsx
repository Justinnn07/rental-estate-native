import * as React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RegistrationSVG from '../assets/registration.svg';
import GooglePNG from '../assets/google.png';
import FacebookPNG from '../assets/facebook.png';
import TwitterPNG from '../assets/twitter.png';
import InputField from '../Components/InputField';

const RegisterScreen = () => {
  return (
    <div 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
      }}>
      <div 
        style={{
          textAlign: 'center'
        }}>
        <img src={RegistrationSVG} alt={'Registration SVG'}
          style={{
            transform: 'rotate(-5deg)',
            height: '300px',
            width: '300px'
        }} />
      </div>

      <div>
        <h1 
          style={{
            fontSize: '28px', 
            color: '#333', 
            marginBottom: '30px'
          }}>
          Register
        </h1>
        <InputField label={'Full Name'}
          icon={
            <PersonOutlinedIcon
              style={{
                marginRight: 5,
                color: '#666666'
              }} />
          } />
        <InputField label={'Email ID'} type="email"
          icon={
            <EmailOutlinedIcon
              style={{
                marginRight: 5,
                color: '#666666'
              }} />
          } />
        <InputField label={'Password'} type="password"
          icon={
            <LockOutlinedIcon
              style={{
                marginRight: 5,
                color: '#666666'
              }} />
          } />
        <InputField label={'Confirm Password'} type="password"
          icon={
            <LockOutlinedIcon
              style={{
                marginRight: 5,
                color: '#666666'
              }} />
          } />
        <button
          style={{
            background: 'linear-gradient(30deg, #0400ff, #4ce3f7)',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            width: '100%'
          }}>
          Register
        </button>
      </div>

      <div
        style={{
          marginTop: '30px'
        }}>
        <p 
          style={{  
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '30px'
          }}>
          Or register with
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '30px',
          }}>
          <button
            style={{
              background: 'transparent',
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              padding: '10px 30px',
            }}>
            <img src={GooglePNG} alt={'Google Logo'}
              style={{
                width: '24px',
                height: '24px'
              }} />
          </button>
          <button
            style={{
              background: 'transparent',
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              padding: '10px 30px',
            }}>
            <img src={FacebookPNG} alt={'Facebook Logo'}
              style={{
                width: '24px',
                height: '24px'
              }} />
          </button>
          <button
            style={{
              background: 'transparent',
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              padding: '10px 30px',
            }}>
            <img src={TwitterPNG} alt={'Twitter Logo'}
              style={{
                width: '24px',
                height: '24px'
              }} />
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}>
          <p>Already registered?</p>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              margin: '0 4px'
            }}>
            <p 
              style={{
                color: '#005feb', 
                fontWeight: '700'
              }}>
              Login
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
