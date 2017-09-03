import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { setDateFilterArticleList } from '../../AC/index'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    handleDayClick = (day) => {
        const dateRange = DateUtils.addDayToRange(day, this.props.dateRange);
        this.props.setDateFilterArticleList(dateRange);
    }

    render() {
        const { from, to } = this.props.dateRange;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        dateRange: state.filter.dateRange
    }
}
export default connect(mapStateToProps, { setDateFilterArticleList })(DateRange)