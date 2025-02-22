import {
  Body,
  Container,
  Head,
  Html,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface SupabaseReauthenticationProps {
  email: string;
  token: string;
}

export const SupabaseReauthentication = ({
  email,
  token,
}: SupabaseReauthenticationProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerText}>Marca <span style={goldText}>Milionária</span></Text>
        </Section>
        <Section style={content}>
          <Text style={title}>Verificação de Segurança</Text>
          <Text>Olá,</Text>
          <Text>Por questões de segurança, precisamos confirmar sua identidade para a conta {email}.</Text>
          <Text>Use o código abaixo para verificar seu acesso:</Text>
          <Text style={verificationCode}>{token}</Text>
          <Text>Este código expira em 10 minutos. Se você não solicitou esta verificação, ignore este email.</Text>
        </Section>
        <Section style={footer}>
          <Text><a href="#" style={footerLink}>{{ .SiteURL }}</a></Text>
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
