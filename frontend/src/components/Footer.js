import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<a
							rel='noopener noreferrer'
							href='https://github.com/PurityGwaro'
							target='_blank'
							className='puritygwaro'
						>
							<i className='fas fa-user-circle'></i> Purity Gwaro Github 
						</a>
						Copyright &copy; React E-Commerce
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
