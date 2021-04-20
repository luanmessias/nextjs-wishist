import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container } from './styles'

const convertBreadcrumb = string => {
  const breadcrumb = string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')

  return <div>{breadcrumb}</div>
}

export const Breadcrumbs = () => {
  const breadRouter = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (breadRouter) {
      const linkPath = breadRouter.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/')
        }
      })

      setBreadcrumbs(pathArray)
    }
  }, [breadRouter])

  if (!breadcrumbs) {
    return null
  }

  return (
    <Container data-testid="breadcrumbs">
      <ul className="breadcrumb">
        <li>
          <Link href="/">
            <a href="">Home</a>
          </Link>
        </li>
        {breadcrumbs.map(({ href, breadcrumb }) => {
          return (
            <li key={href}>
              <Link href={href}>
                <a href="">{convertBreadcrumb(breadcrumb)}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Breadcrumbs
