import React from 'react'
import styles from './Classroom.module.css'
import Slider from 'react-slick'
import Card from '../UI/Card/Card'

const Classroom = (props) => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (


        <div className={styles.Classroom}>

            <Slider {...settings}>

                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />
                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />
                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />
                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />
                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />
                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />
                <Card
                    section={'a'}
                    studentStrength={'68'}
                    presentees={'60'}
                    classTeacher={'Ramji Balu Sudarsan'}
                    date={'12th June'}
                />



            </Slider>

        </div>

    )
}

export default Classroom
