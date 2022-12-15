import React from 'react'
import {Container} from "react-bootstrap"
const AUTH_URL = "https://api.mangadex.org/auth/login"
export default function LoginPage() {
  return (
    <Container className="d-flex justify-center">
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login
        </a>
    </Container>
  )
}

