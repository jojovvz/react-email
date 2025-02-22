import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface SupabaseResetPasswordProps {
  email: string;
  confirmationURL: string;
  token: string;
}

export const SupabaseResetPassword = ({
  email,
  confirmationURL,
  token,
}: SupabaseResetPasswordProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerText}>Marca <span style={goldText}>Milionária</span></Text>
        </Section>
        <Section style={content}>
          <Text style={title}>Redefinição de Senha</Text>
          <Text>Olá,</Text>
          <Text>Recebemos uma solicitação para redefinir a senha da sua conta ({email}).</Text>
          <Text style={subtitle}>Opção 1: Link de Redefinição</Text>
          <Link href={confirmationURL} style={button}>Redefinir Senha</Link>
          <Text style={subtitle}>Opção 2: Código de Verificação</Text>
          <Text style={verificationCode}>{token}</Text>
          <Text>Este link e código expiram em 1 hora. Se você não solicitou esta redefinição, ignore este email.</Text>
        </Section>
        <Section style={footer}>
          <Link href="#" style={footerLink}>{{ .SiteURL }}</Link>
          <Text>© 2025 Marca Milionária. Todos os direitos reservados.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const header = {
  textAlign: 'center' as const,
  padding: '20px 0',
  borderBottom: '2px solid #ffd700',
};

const headerText = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
};

const goldText = {
  color: '#ffd700',
};

const content = {
  padding: '30px 0',
};

const title = {
  fontSize: '20px',
  fontWeight: 'bold' as const,
};

const subtitle = {
  fontSize: '18px',
  fontWeight: 'bold' as const,
  marginTop: '20px',
};

const button = {
  backgroundColor: '#ffd700',
  color: '#1a1a1a',
  padding: '15px 30px',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold' as const,
  display: 'inline-block',
  margin: '20px 0',
};

const verificationCode = {
  background: '#333',
  padding: '20px',
  textAlign: 'center' as const,
  margin: '20px 0',
  fontSize: '24px',
  letterSpacing: '5px',
  color: '#ffd700',
};

const footer = {
  textAlign: 'center' as const,
  paddingTop: '20px',
  borderTop: '1px solid #333',
  color: '#888',
};

const footerLink = {
  color: '#ffd700',
};
