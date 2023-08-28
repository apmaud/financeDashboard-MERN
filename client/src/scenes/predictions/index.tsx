import DashboardBox from '@/components/DashboardBox';
import FlexBetween from '@/components/FlexBetween';
import { useGetKpisQuery } from '@/state/api';
import { useTheme } from '@emotion/react'
import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = {}

const Predictions = (props: Props) => {
    const { palette } = useTheme();
    const { isPredictions, setIsPredictions} = useState();
    const { data: kpiData } = useGetKpisQuery();

    return (
        <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
            <FlexBetween m="1rem 2.5rem" gap="1rem">
                <Box>
                    <Typography variant="h3">Revenue and Predictions</Typography>
                    <Typography variant="h6">Charted revenue and predicted revenue based on a simple regression model</Typography>
                </Box>
                <Button 
                    onClick={() => setIsPredictions(!isPredictions)}
                    sx= {{
                        color: palette.grey[900],
                        bgcolor: palette.grey[700],
                        boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)"
                    }}
                >  
                    Show Predicted Revenue for Next Year
                </Button>
            </FlexBetween>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                data={formattedData}
                margin={{
                    top: 20,
                    right: 75,
                    left: 20,
                    bottom: 80,
                }}
                >
                <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                <XAxis
                    dataKey="name" 
                    tickLine={false} 
                    style={{ fontSize: "10px" }}
                />
                <YAxis
                    yAxisId="left"
                    tickLine={false} 
                    axisLine={false}
                    style={{ fontSize: "10px" }}
                />
                <YAxis 
                    yAxisId="right"
                    orientation="right"
                    tickLine={false} 
                    axisLine={false}
                    style={{ fontSize: "10px" }}
                />
                <Tooltip />
                <Legend height={20} wrapperStyle= {{
                    margin: "0 0 10px 0"
                }} />
                <Line 
                    yAxisId="left"
                    type="monotone"
                    dataKey="profit"
                    stroke={palette.tertiary[500]}
                />
                <Line 
                    yAxisId="right"
                    type="monotone"
                    dataKey="revenue"
                    stroke={palette.primary.main}
                />
                </LineChart>
            </ResponsiveContainer>
        </DashboardBox>
    )
}

export default Predictions