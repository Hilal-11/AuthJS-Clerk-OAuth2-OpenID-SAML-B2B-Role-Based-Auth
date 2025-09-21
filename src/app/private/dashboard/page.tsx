import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table , TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

function Dashboard() {
  return (
    <div className='flex min-h-screen'>
      <div className='lg:w-[80%] w-full mx-auto grid gap- py-10 px-10'>
        <Card>
            <CardHeader className='flex flex-row items-center justify-center pb-2'>
                <CardTitle className='text-sm font-medium'>Recent Signups</CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Plan</TableHead>
                            <TableHead>Signup Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>2023-01-01</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>2023-01-01</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>2023-01-01</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>2023-01-01</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john.doe@example.com</TableCell>
                            <TableCell>Pro</TableCell>
                            <TableCell>2023-01-01</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
