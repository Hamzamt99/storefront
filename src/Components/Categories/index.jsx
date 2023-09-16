import React from 'react'
import { connect } from 'react-redux';
import { dispatcher } from '../store/categories';
import './style.scss'
function Category(props) {
    const categories = props.categories

    const handleCategoryClick = (name) => {
        props.dispatcher(name);
    }

    return (
        <>
            <h1 >Browse Our Category</h1>
            <div className='category'>
                {
                    categories &&
                    categories.map(category => {
                        return (
                            <p key={category.name} onClick={() => handleCategoryClick(category.name)}>
                                {category.name}
                            </p>
                        )
                    })
                }
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    dispatcher: name => dispatch(dispatcher(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
