import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Read() {
  const params = useParams();
  const id = Number(params.id);
  const [topic, setTopic] = useState({ title: null, body: null });

  async function refresh() {
    const resp = await fetch('http://localhost:3300/topics/' + id);
    const data = await resp.json();
    setTopic(data);
  }

  useEffect(() => {
    refresh();
  }, [id]);

  return <article>
    <h2>{topic.title}</h2>
    {topic.body}
  </article>;
}
