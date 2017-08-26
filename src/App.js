import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import ArticleChart from './components/ArticleChart';
import UserForm from './components/UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class App extends Component {
    state = {
        //selected: null,
        from: null,
        to: null,
    }

    handleSelectionChange = selected => this.setState({ selected })

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    render() {
        const { articles } = this.props;
        const { from, to } = this.state;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const WEEKDAYS_LONG = {
            en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        };

        const WEEKDAYS_SHORT = {
            en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            ru: ["По", "Вт", "Ср", "Че", "Пя", "Су", "Во"],
        };

        const MONTHS = {
            en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        };

        const FIRST_DAY = {
            en: 0,
            ru: 1,
        };

        const localeUtils = {
            formatDay: (d, locale = 'en') => {
                `${WEEKDAYS_LONG[locale][d.getDay()]}, ${d.getDate()} ${MONTHS[locale][
                    d.getMonth()
                ]} ${d.getFullYear()}`
            },
            formatMonthTitle: (d, locale) =>
                `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`,
            formatWeekdayShort: (i, locale) => WEEKDAYS_SHORT[locale][i],
            formatWeekdayLong: (i, locale) => WEEKDAYS_LONG[locale][i],
            getFirstDayOfWeek: locale => FIRST_DAY[locale],
        }

        return (
            <div>
                <h2>Menu</h2>
                <div>
                    <h1>News App</h1>
                    <UserForm />
                    <Select options={options} value={this.state.selected}
                        onChange={this.handleSelectionChange}
                        multi
                    />
                    <div>
                        <p>
                            <b>from</b>: {from ? from.toString() : ""}
                        </p>
                        <p>
                            <b>to</b>: {to ? to.toString() : ""}
                        </p>
                        <DayPicker
                            numberOfMonths={2}
                            selectedDays={[from, { from, to }]}
                            onDayClick={this.handleDayClick}
                            fixedWeeks
                            locale="ru"
                            localeUtils={localeUtils}
                        />
                    </div>
                    <ArticleList articles={articles} defaultOpenId={articles[0].id} />
                    <ArticleChart articles={articles} />
                </div>
            </div>
        )
    }
}