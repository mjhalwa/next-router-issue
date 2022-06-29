import React from 'react'
import { withRouter } from 'next/router'

/**
 * @brief turn of automatic static optimization
 * @see https://nextjs.org/docs/advanced-features/automatic-static-optimization
 * @details without this function the this.props.router.query object is empty
 */
export async function getServerSideProps() {
  return { props: {} }
}

// withRouter() to access this.props.router object
export default withRouter(class Some extends React.Component {
  constructor( props ) {
    super( props )
  }

  componentDidMount() {
    console.log(JSON.parse(JSON.stringify(this.props.router)))
    console.log(JSON.parse(JSON.stringify(this.props.router.asPath)))
    console.log(JSON.parse(JSON.stringify(this.props.router.query)))
  }

  render () {
    return ( <div>Hello World</div> )
  }
})