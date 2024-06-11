const totalViewChart = document.getElementById('total-views-chart')
const revenueChart = document.getElementById('revenue-chart')
const growthRateChart = document.getElementById('growth-rate-chart')
const subsCountChart = document.getElementById('subscriber-count-chart')
const trafficSourcesElement = document.getElementById('traffic-sources')
const datatableElement = document.getElementById('datatable')

fetch('/api/total-views').then(res => res.json()).then(({labels, datasets}) => {
    new Chart(totalViewChart, {
        type: 'line',
        data: {
            labels,
            datasets,
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
})


const estumatedRevenueChart = new Chart(revenueChart, {
    type: 'bar',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: "# of votes",
            data: [255, 200, 290, 179, 512, 580],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const subscriberCountChar = new Chart(subsCountChart, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const trafficSourcesChart = new Chart(trafficSourcesElement, {
    type: 'pie',
    data: {
        labels: ['Youtube', 'Facebook', 'Snapchat', 'Google', 'Firefox', 'Opera'],
        datasets: [{
            label: "# Share",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

const dataTable = new simpleDatatables.DataTable('#datatable', {
    searchable: true,
    fixedHeight: true,
    data: {
        headings: ['Video title', 'Published Date', 'Views Count'],
        data: [
            ["Top 10 VS Code shortcuts", "15-11-2022", "451234"],
            ["How to install Python on Windows", "10-03-2021", "321789"],
            ["JavaScript ES6 Features", "22-07-2020", "874521"],
            ["React Hooks Tutorial", "01-01-2022", "564328"],
            ["Understanding CSS Flexbox", "15-05-2021", "789456"],
            ["Introduction to Node.js", "30-09-2020", "654123"],
            ["Mastering Git and GitHub", "14-02-2021", "987654"],
            ["Creating REST APIs with Express", "18-08-2020", "213546"],
            ["Vue.js Basics", "25-12-2021", "374859"],
            ["Building a Portfolio Website", "11-11-2020", "478563"],
            ["Top 5 Python Libraries for Data Science", "05-07-2021", "356478"],
            ["Learn TypeScript in 30 Minutes", "03-03-2022", "412369"],
            ["Bootstrap 5 Crash Course", "19-06-2021", "591824"],
            ["Deploying Apps with Docker", "27-04-2021", "682153"],
            ["Getting Started with GraphQL", "08-09-2020", "578412"],
            ["Intro to Machine Learning with Python", "21-02-2022", "457812"],
            ["Building Mobile Apps with Flutter", "17-01-2021", "614235"],
            ["Understanding Async/Await in JavaScript", "29-10-2020", "732615"],
            ["Setting Up a CI/CD Pipeline", "04-04-2021", "591237"],
            ["Mastering Linux Command Line", "12-08-2021", "658974"]
        ]
    }
})