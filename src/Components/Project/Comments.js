import React, {useEffect,useState} from 'react'

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetch(`https://portfolio-server-yqaw.onrender.com/comments/${props.project.name}`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }, [props.project.name]);

  const handleAddComment = () => {
    const newComment = {projectName: props.project.name, name, message};
    fetch('https://portfolio-server-yqaw.onrender.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })
      .then(response => response.json())
      .then(data => {
        setComments([...comments, data]);
        setShowForm(false);
        setName('');
        setMessage('');
      })
      .catch(error => console.log(error));
  }

  const reveal = () => {
    if(comments.length > 0){
        setShowComments(!showComments);
    }
  }
  return (
    <div className={`${showComments && 'max-h-40'} flex flex-col px-3 -mt-4 text-black bg-white rounded-b-2xl`}>
        {showComments ? (
            <div className='relative'>
            <button onClick={reveal} className='absolute right-2 top-4'>✖</button>
            <div className='h-24 mt-4 overflow-y-scroll'>
            {comments.map((comment, index) => (
                <div key={index} className='my-2'>
                <h5 className='text-sm font-bold'>{comment.name}</h5>
                <p className='text-xs'>{comment.message}</p>
                </div>
            ))}
            </div>
            </div>
            ) : (
            <button className='mt-6 mb-2 text-xs w-fit' onClick={reveal}>Show Comments...</button>
        )}
        <button onClick={() => setShowForm(!showForm)} className='mt-auto mb-2 font-semibold w-full rounded-lg bg-gradient-to-r from-[#FFA500] to-[#FFFF00]'>Add Comment</button>
        {showForm && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative w-72 p-4 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-lg'>
                <div className='flex justify-center mb-3'>
                    <h4 className='font-semibold text-md'>Project: {props.project.name}</h4>
                </div>
                <button onClick={() => setShowForm(false)} className='absolute top-2 right-2'>✖</button>
                <form onSubmit={handleAddComment}>
                    <input 
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Your name' 
                    className='w-full mb-2 text-sm border rounded p-[1px]'
                    required={true}
                    />
                    <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder='Your comment' 
                    className='w-full mb-2 text-sm border rounded p-[1px]'
                    rows={3}
                    required={true}
                    ></textarea>
                    <button type='submit' className='w-full bg-white rounded-lg'>Submit</button>
                </form>
            </div>
          </div>
        )}
      </div>
  )
}

export default Comments;