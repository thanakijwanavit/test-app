import React from 'react'

function Book(props) {
  return (
    <article className='book'>
        <Title title={props.title} />
        <Author author={props.author}/>
        <Image src={props.img} alt={props.title }/>
    </article>
  )
}

function Title(props){
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}
function Author(props){
  return (
    <div>
        <h4>{props.author}</h4>
    </div>
  )
}
function Image(props){
  return (
    <img
        src={props.src}
        alt={props.alt}
    />
  )
}

export default Book


