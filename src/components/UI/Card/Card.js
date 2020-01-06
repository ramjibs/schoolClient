import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.Card}>
            <div className={styles.Content}>
                <div className={styles.contentMain}>
                    <div className={styles.Classroom}>
                            <p>Student Strength : <strong>{props.studentStrength}</strong></p>
                            <p>Presentees : <strong>{props.presentees}</strong></p>
                            
                    </div>
                    <div className={styles.Section}>
                        <p>{props.section}</p>
                    </div>
                </div>
                <div className={styles.contentSub}>
                    <p>Class Teacher : <strong>{props.classTeacher}</strong></p>
                </div>

            </div>


        </div>





    )
}

export default Card;
