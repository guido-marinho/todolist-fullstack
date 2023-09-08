import React from 'react';

export default function Form() {
  return (
    <form>
      <input type="text" placeholder='Adicionar tarefa' className='input-task' />
      <button type='submit' className='btn-add'>+</button>
    </form>
  );
}
