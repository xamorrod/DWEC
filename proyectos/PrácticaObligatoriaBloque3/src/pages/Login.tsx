import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { login, user, loading: authLoading } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">
            Iniciar Sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="admin@admin.com"
                className="focus-visible:ring-ring"
                required
                disabled={authLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                Contraseña <span className="text-destructive">*</span>
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="focus-visible:ring-ring"
                required
                disabled={authLoading}
              />
            </div>

            {error && (
              <div className="text-sm text-destructive" role="alert">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={authLoading}
            >
              {authLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>

            <div className="space-y-4 text-center text-sm text-muted-foreground">
              <div>
                <Link to="/register" className="text-primary hover:text-primary/90 transition-colors">
                  ¿No tienes cuenta? Regístrate
                </Link>
              </div>
              <div>
                <a href="#" className="text-primary hover:text-primary/90 transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;