for dir in */; do
  cd "$dir"
  pnpm init
  cd ..
done
