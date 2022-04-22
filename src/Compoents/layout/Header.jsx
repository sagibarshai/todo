import classes from '../../styles/layout/header.module.css' 
export default () => {
    return <header className={classes["header__container"]}>
        <div className={classes['header-content__container']}>
        <img className={classes['header__logo']} src='images/note-logo.png'/>
        <p className={classes["header__text"]}>To Do List</p>
        </div>
        </header>
}
