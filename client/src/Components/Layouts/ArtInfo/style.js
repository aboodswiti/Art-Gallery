import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: 50,
  },
  divs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 400,
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 10,
  },
  root: {
    maxWidth: 400,
  },
  img: {
    maxWidth: 400,
    maxHeight: 600,
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 400,
    height: 60,
    borderTop: '0.5px solid ',
    borderColor: grey[300],
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
  },
}))

export default useStyles
