import React from 'react'

const DataCards = ({resData}) => {
  const{title,selftext_html,url,score} = resData;
  return (
    <div>
      <div className="border border-red-500 rounded-md p-4 m-8">

        <div className="font-bold text-slate-900 "><span className="text-violet-800 font-bold">Title: </span>{title}</div>
        <div className="text-green-800"><span className="text-violet-800 font-bold text-wrap">SelfText: </span>{selftext_html}</div>
        <a className="text-blue-700 font-bold text-wrap" href={url}><span className="text-violet-800">URL: </span>{url}</a>
        <div className="text-red-500 font-bold"><span className="text-violet-800">Score: </span>{score}</div>
      </div>
    </div>
  )
}

export default DataCards