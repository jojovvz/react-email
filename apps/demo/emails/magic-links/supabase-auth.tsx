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

interface SupabaseAuthEmailProps {
  email: string;
  confirmationURL: string;
  token: string;
}

export const SupabaseAuthEmail = ({
  email,
  confirmationURL,
  token,
}: SupabaseAuthEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerText}>Marca <span style={goldText}>Milionária</span></Text>
        </Section>
        <Section style={content}>
          <Text style={title}>Confirme seu cadastro</Text>
          <Text>Olá,</Text>
          <Text>Bem-vindo à Marca Milionária! Para confirmar seu email ({email}), use um dos métodos abaixo:</Text>
          <Text style={subtitle}>Opção 1: Link de Confirmação</Text>
          <Link href={confirmationURL} style={button}>Confirmar Cadastro</Link>
          <Text style={subtitle}>Opção 2: Código de Verificação</Text>
          <Text style={verificationCode}>{token}</Text>
          <Text>Se você não solicitou este cadastro, ignore este email.</Text>
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
