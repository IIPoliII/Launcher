import { Box, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

// Components
import NewsArticle from './NewsArticle'

function SettingsMenu(): JSX.Element {
  const [news, setNews] = useState<Types.NewsArticle[]>([])

  useEffect(() => {
    axios
      .get('https://cdn.ipmake.dev/kocity/news', {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      })
      .then((res) => {
        setNews(res.data)
      })
  }, [])

  return (
    <Box
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '460px',
        maxHeight: '460px',
        overflowY: 'scroll'
      }}
    >
      {((): JSX.Element | JSX.Element[] => {
        if (news.length === 0)
          return <CircularProgress style={{ margin: 'auto', marginTop: '150px' }} />
        else
          return news.map((item, index) => {
            return (
              <NewsArticle
                key={index}
                title={item.title.toUpperCase()}
                date={moment(parseInt(item.time)).fromNow()}
                content={item.description}
              />
            )
          })
      })()}
    </Box>
  )
}

export default SettingsMenu
