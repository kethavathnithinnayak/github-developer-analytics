import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function RepositoryMetricsChart({ analytics }) {

    const data = [
        {
            name: "Repositories",
            value: analytics.totalRepositories
        },
        {
            name: "Stars",
            value: analytics.totalStars
        },
        {
            name: "Forks",
            value: analytics.totalForks
        },
        {
            name: "Average Stars",
            value: analytics.averageStars
        }
    ];

    return (
        <div className="chart-card">
            <h2>Repository Metrics</h2>

            <BarChart
                width={600}
                height={350}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Legend />

                <Bar dataKey="value" />
            </BarChart>
        </div>
    );
}

export default RepositoryMetricsChart;