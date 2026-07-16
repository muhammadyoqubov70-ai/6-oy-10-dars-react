#!/bin/bash
mkdir -p src/pages/auth src/pages/public src/pages/layouts

mv src/pages/LoginPage.jsx src/pages/auth/LoginPage.jsx

for f in Error Home PostDetail Posts; do
cat > src/pages/public/$f.jsx << INNER
function $f() {
  return <div>$f sahifasi</div>;
}
export default $f;
INNER
done

for f in PubliLayout AuthLaout AdminLayout; do
cat > src/pages/layouts/$f.jsx << INNER
import { Outlet } from "react-router-dom";
function $f() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default $f;
INNER
done

echo "✅ Struktura tuzatildi!"
