import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

function LanguageChart({ languageCount }) {

const total = Object.values(languageCount).reduce(
    (sum, count) => sum + count,
    0
);

const data = Object.entries(languageCount).map(
    ([language, count]) => ({
        name: language,
        value: count,
        percentage: ((count / total) * 100).toFixed(1)
    })
);

    const COLORS = [
        "#8884d8",
        "#82ca9d",
        "#ffc658",
        "#ff8042",
        "#0088FE",
        "#00C49F"
    ];

    return (
        <div className="chart-card">
            <h2>Programming Languages</h2>

            <PieChart width={400} height={300}>
                             <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={({ name, percentage }) =>
                                `${name} ${percentage}%`
                            }
                        >
                        {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}

export default LanguageChart;