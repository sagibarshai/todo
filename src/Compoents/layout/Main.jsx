import classes from '../../styles/layout/main.module.css'
import Form from '../Form'
export default () => {
    return <main className={classes['main__container']}>
      <h1 className={classes['main__my-todos']}>  My todos:</h1>
        <Form/>
    </main>
}