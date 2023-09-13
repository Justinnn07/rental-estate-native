import * as React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginSVG from '../assets/login.svg';
import GooglePNG from '../assets/google.png';
import FacebookPNG from '../assets/facebook.png';
import TwitterPNG from '../assets/twitter.png';
import InputField from '../Components/InputField';

export default function LoginScreen() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <div 
        style={{
          textAlign: 'center'
        }}>
        <img src={LoginSVG} alt={'Login SVG'}
          style={{
            transform: 'rotate(-5deg)', 
            height: '350px', 
            width: '350px',
          }} />
      </div>

      <div>
        <h1 
          style={{
            fontSize: '28px', 
            color: '#333', 
            marginBottom: '30px'
          }}>
          Login
        </h1>
        <InputField label={'Email ID'} type="email"
          icon={
            <EmailOutlinedIcon
              style={{
                marginRight: 5,
                color: '#666',
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
          Login
        </button>
      </div>

      <div 
        style={{
          marginTop: '50px'
        }}>
        <p 
          style={{
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '30px'
          }}>
          Or login with
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 20px 30px',
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
              }}/>
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
              }}/>
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}>
          <p>New to the app?</p>
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
              Register
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};