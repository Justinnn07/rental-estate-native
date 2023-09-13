import React from 'react';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <div
      style={{
        display: 'flex',
        borderBottom: '1px solid #ccc',
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType === 'password' ? (
        <input
          placeholder={label}
          type="password"
          style={{flex: 1, paddingVertical: 0, border: 'none'}}
        />
      ) : (
        <input
          placeholder={label}
          type={keyboardType}
          style={{flex: 1, paddingVertical: 0, border: 'none'}}
        />
      )}
      <button onClick={fieldButtonFunction} style={{color: '#AD40AF', fontWeight: '700'}}>
        {fieldButtonLabel}
      </button>
    </div>
  );
}
