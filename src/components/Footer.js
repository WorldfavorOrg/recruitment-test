import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer: {
    borderTop: '1px solid #e1e1e1',
    padding: '17px 0 15px',
    margin: 'auto',
    maxWidth: 1195,
    color: '#888',

    '& a': {
      color: '#888 !important',
    },

    '& ul': {
      '& li': {
        padding: '0 10px',
      },
    },
  }
})

const Footer = (props) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <footer
        className={classes.footer}
        role="contentinfo"
      >
        <div className="clearfix">
          <ul className="list-unstyled clearfix">
            <li className="company-name">{ '© Worldfavor AB' }</li>
            <li className="company-address">{ 'Munkbron 11, 111 28 Stockholm, Sweden' }</li>
            <li className="company-rights">{ 'All rights reserved.' }</li>
            <li className="company-terms">
              <a href="https://worldfavor.com/terms-conditions/" target="_blank" rel="noopener noreferrer">
                { 'Terms & conditions' }
              </a>
            </li>
          </ul>
        </div>
        <div className="appVersionInfo">
          { 'Version 1.0.0' }
        </div>
      </footer>
    </div>
  )
}

export default Footer
